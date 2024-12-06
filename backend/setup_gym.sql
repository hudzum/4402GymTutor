-- Create Members Table
CREATE TABLE Members (
    member_id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone_number TEXT,
    email TEXT UNIQUE,
    plan_name TEXT,
    FOREIGN KEY (plan_name) REFERENCES MembershipPlans(plan_name)
);

-- Create Classes Table
CREATE TABLE Classes (
    class_id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_name TEXT NOT NULL,
    schedule TEXT NOT NULL,
    description TEXT,
    class_count INTEGER,
    instructor_id INTEGER,
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);

-- Create Instructors Table
CREATE TABLE Instructors (
    instructor_id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    specialty TEXT
);

-- Create MembershipPlans Table
CREATE TABLE MembershipPlans (
    plan_id INTEGER PRIMARY KEY,
    plan_name TEXT NOT NULL,
    price_per_month REAL NOT NULL,
    description TEXT
);


-- Insert Sample Membership Plans
INSERT INTO MembershipPlans (plan_id, plan_name, price_per_month, description)
VALUES 
    (1, 'Basic', 20.00, 'Access to gym facilities during staffed hours.'),
    (2, 'Premium', 40.00, 'Includes gym facilities, group classes, and 24/7 access.'),
    (3, 'VIP', 60.00, 'All benefits of Premium plus personal training and spa access.');

-- Insert Sample Members
INSERT INTO Members (first_name, last_name, phone_number, email, plan_name)
VALUES 
    ('David', 'Clark', '555-2345', 'david.clark@example.com', 'Basic'),
    ('Emma', 'Taylor', '555-3456', 'emma.taylor@example.com', 'Premium'),
    ('Olivia', 'Johnson', '555-4567', 'olivia.johnson@example.com', 'VIP'),
    ('Liam', 'Brown', '555-5678', 'liam.brown@example.com', 'Basic'),
    ('Noah', 'Miller', '555-6789', 'noah.miller@example.com', 'Premium'),
    ('Sophia', 'Wilson', '555-7890', 'sophia.wilson@example.com', 'VIP'),
    ('Ethan', 'Davis', '555-8901', 'ethan.davis@example.com', 'Basic'),
    ('Ava', 'Martinez', '555-9012', 'ava.martinez@example.com', 'Premium'),
    ('Mason', 'Anderson', '555-0123', 'mason.anderson@example.com', 'VIP'),
    ('Charlotte', 'Lee', '555-1234', 'charlotte.lee@example.com', 'Basic');


-- Insert Sample Classes
INSERT INTO Classes (class_name, schedule, description, class_count, instructor_id)
VALUES 
    ('🏋️‍♂️ Strength Training', 'Tuesday 5 PM', 'Build muscle strength and endurance with guided weight exercises.', 15, 4),
    ('🏃‍♀️ Cardio Blast', 'Thursday 6 AM', 'High-energy cardio session to improve heart health and stamina.', 18, 5),
    ('🧘 Power Yoga', 'Saturday 8 AM', 'A faster-paced Yoga class for intermediate practitioners.', 12, 1),
    ('🚴 Spin Advanced', 'Friday 7 PM', 'Advanced cycling class for experienced riders.', 10, 2),
    ('🤸 CrossFit Basics', 'Monday 6 PM', 'Introductory CrossFit class for building core strength.', 20, 6),
    ('🤽 Aqua Aerobics', 'Wednesday 9 AM', 'Low-impact water-based fitness class.', 25, 7),
    ('🥊 Kickboxing', 'Tuesday 7 PM', 'High-intensity kickboxing class for fitness and self-defense.', 30, 8),
    ('🕺 Zumba', 'Sunday 10 AM', 'Dance-based workout to energetic music.', 28, 9),
    ('🏊 Swimming Lessons', 'Saturday 4 PM', 'Basic swimming techniques for beginners.', 8, 10),
    ('🤸 Advanced Pilates', 'Thursday 5 PM', 'An intense Pilates session for advanced members.', 14, 3);


INSERT INTO Instructors (first_name, last_name, specialty)
VALUES 
    ('Jack', 'Brown', 'Strength Training'),
    ('Ella', 'Thompson', 'Cardio'),
    ('Lucas', 'Martinez', 'CrossFit'),
    ('Mia', 'Garcia', 'Aqua Fitness'),
    ('James', 'Harris', 'Kickboxing'),
    ('Grace', 'Robinson', 'Dance Fitness'),
    ('Benjamin', 'Clark', 'Swimming'),
    ('Amelia', 'Lewis', 'Yoga'),
    ('Oliver', 'Walker', 'Cycling'),
    ('Isabella', 'King', 'Pilates');
