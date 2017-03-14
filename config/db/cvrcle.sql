-- ---
-- Globals
-- ---

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS=0;

use cvrcle1;

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(20) NULL,
  `last_name` VARCHAR(20) NULL,
  `email` VARCHAR(25) NOT NULL,
  `fbid` VARCHAR(10) NULL,
  PRIMARY KEY (`id`)
) COMMENT 'user info stored here';

-- ---
-- Table 'entries'
-- individual rows encapsulate whole, atomic itinerary entries
-- ---

DROP TABLE IF EXISTS `entries`;
		
CREATE TABLE `entries` (
  `id` INTEGER NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NULL,
  `body` MEDIUMTEXT NULL,
  `lat` DECIMAL NULL DEFAULT NULL,
  `long` INTEGER NULL DEFAULT NULL,
  `name` INTEGER NULL DEFAULT NULL,
  `address` INTEGER NULL DEFAULT NULL,
  `type` INTEGER NULL DEFAULT NULL,
  `contributor_id` INTEGER(6) NULL,
  `created_at` TIMESTAMP NULL,
  `last_updated` TIMESTAMP NULL,
  PRIMARY KEY (`id`)
) COMMENT 'individual rows encapsulate whole, atomic itinerary entries';

-- ---
-- Table 'users_itins'
-- one to many join table for mapping unique user id to any number of itineraries they own
-- ---

DROP TABLE IF EXISTS `users_itins`;
		
CREATE TABLE `users_itins` (
  `id` INTEGER NULL AUTO_INCREMENT,
  `id_user` INTEGER(6) NULL,
  `id_itin` INTEGER(8) NULL,
  PRIMARY KEY (`id`)
) COMMENT 'one to many join table for mapping unique user id to any num';

-- ---
-- Table 'itineraries'
-- individual rows encapsulate whole, atomic itineraries
-- ---

DROP TABLE IF EXISTS `itineraries`;
		
CREATE TABLE `itineraries` (
  `id` INTEGER NULL AUTO_INCREMENT,
  `owner_id` INTEGER NULL,
  `itin_name` VARCHAR(40) NULL,
  `is_active` INTEGER NULL DEFAULT NULL,
  `is_public` INTEGER NULL DEFAULT NULL,
  `date_created` TIMESTAMP NULL,
  PRIMARY KEY (`id`)
) COMMENT 'individual rows encapsulate whole, atomic itineraries';

-- ---
-- Table 'entries_itins'
-- join table for mapping one unique itinerary id to many potential itinerary entries
-- ---

DROP TABLE IF EXISTS `entries_itins`;
		
CREATE TABLE `entries_itins` (
  `id` INTEGER NULL AUTO_INCREMENT,
  `id_itin` INTEGER NULL,
  `id_entry` INTEGER NULL,
  PRIMARY KEY (`id`)
) COMMENT 'join table for mapping one unique itinerary id to many poten';

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `entries` ADD FOREIGN KEY (contributor_id) REFERENCES `users` (`id`);
ALTER TABLE `users_itins` ADD FOREIGN KEY (id_user) REFERENCES `users` (`id`);
ALTER TABLE `users_itins` ADD FOREIGN KEY (id_itin) REFERENCES `itineraries` (`id`);
ALTER TABLE `entries_itins` ADD FOREIGN KEY (id_itin) REFERENCES `itineraries` (`id`);
ALTER TABLE `entries_itins` ADD FOREIGN KEY (id_entry) REFERENCES `entries` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `entries` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users_itins` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `itineraries` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `entries_itins` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`first_name`,`last_name`,`email`,`fbid`) VALUES
-- ('','','','','');
-- INSERT INTO `entries` (`id`,`title`,`body`,`lat`,`long`,`name`,`address`,`type`,`contributor_id`,`created_at`,`last_updated`) VALUES
-- ('','','','','','','','','','','');
-- INSERT INTO `users_itins` (`id`,`id_user`,`id_itin`) VALUES
-- ('','','');
-- INSERT INTO `itineraries` (`id`,`owner_id`,`itin_name`,`is_active`,`is_public`,`date_created`) VALUES
-- ('','','','','','');
-- INSERT INTO `entries_itins` (`id`,`id_itin`,`id_entry`) VALUES
-- ('','','');