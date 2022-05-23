-- Up
CREATE TABLE zohoAuth(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    accessToken TEXT
);

INSERT INTO zohoAuth (accessToken) values ('1000.40d1925fe71430f54843cbf52ece7cf3.61809ae72c122b9da24d5f83cbdb5764');

-- Down
DROP TABLE zohoAuth;