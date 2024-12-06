const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS to allow requests from your frontend
app.use(cors());
app.use(express.json());

// Path to your SQLite database file
const db = new sqlite3.Database("./gym.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

{/*For Getting a the List of Members */}
app.get("/api/members", (req, res) => {
  const query = `
    SELECT 
      Members.member_id AS id,
      Members.first_name || ' ' || Members.last_name AS name,
      Members.email,
      Members.phone_number,
      MembershipPlans.plan_name AS plan_type
    FROM Members
    LEFT JOIN MembershipPlans ON Members.plan_name = MembershipPlans.plan_name;
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Failed to fetch members." });
    } else {
      res.json(rows);
    }
  });
});

{/*For Adding a Member to the List */}
app.post('/api/members', async (req, res) => {
  
  let { firstname, lastname, email,membership, phone } = req.body;

  if (!firstname || !lastname || !membership || !email || !phone) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

 
    const query = `
      INSERT INTO members (first_name, last_name, phone_number, email, plan_name)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [firstname, lastname, phone, email, membership];
    db.all(query, values , (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while creating the member.' });
      } else {
        res.status(201).json({ message: 'Member created successfully!' });
      }
  });
});

{/*For Deleting a Member */}
app.delete("/api/members/:id", async (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM members WHERE member_id = ?", [id], (err) =>{ 
    if(err){
      console.log(err)
      res.status(500).send({ message: "Failed to delete member" });
    } else{
      res.status(200).send({ message: "Member deleted successfully" });
    }
  })
});


{/*Endpoint to get class details with instructor names */}
app.get('/api/classes', (req, res) => {
  const query = `
    SELECT 
      c.class_id,
      c.class_name,
      c.schedule,
      c.description,
      c.class_count,
      c.instructor_id,
      i.first_name || ' ' || i.last_name AS instructor_name
    FROM 
      Classes c
    LEFT JOIN 
      Instructors i 
    ON 
      c.instructor_id = i.instructor_id
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Failed to fetch Classes." });
    } else {
      res.json(rows);
    }
  });
});


// Endpoint to update class count
app.put('/api/classes/:classId', (req, res) => {
  const { classId } = req.params;


  const query = `
    UPDATE Classes
    SET class_count = class_count + 1
    WHERE class_id = ?
  `;

  db.run(query, [classId], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Failed to update class count." });
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: "Class not found." });
    }

    res.json({ message: "Class count updated successfully.", classId });
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});