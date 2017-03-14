 -- ---
-- Globals
-- ---



SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS=0;


USE cvrcle1;
-- ---
-- Table 'messages'
--
-- ---


DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER(20) NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(200) NULL DEFAULT NULL,
  `username` VARCHAR(200) NULL DEFAULT NULL,
  `roomname` VARCHAR(200) NULL DEFAULT NULL,
  `userID` INTEGER(5) NULL DEFAULT NULL,
  `roomID` INTEGER(5) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER(5) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
--
-- ---

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` INTEGER(5) NOT NULL AUTO_INCREMENT,
  `roomname` VARCHAR(40) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (userID) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (roomID) REFERENCES `rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


-- ---
-- Test Data
-- ---
INSERT INTO `messages` (`text`, `username`, `roomname`) VALUES
('This is a test message', 'ArmenR', 'FunBags');




SET FOREIGN_KEY_CHECKS=1;

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/