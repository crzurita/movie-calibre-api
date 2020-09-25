## Movie Calibre Api

## Available Scripts

### Install de project
On root folder `npm i` or `yarn`

### `npm run star`
Development Server. Open on a browser localhost:8000/api

### Available routes
`GET localhost:8000/api/movies` brings all movies
`GET localhost:8000/api/movies/id` bring specific movie
`POST localhost:8000/api/rates[data]` insert a movie rate

### BD

`host: 'localhost',
  user: 'root',
  password: '',
  database: 'calibre'`

### Movie table

CREATE TABLE `movies`(
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`image` VARCHAR(250) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`title` CHAR(50) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`year` CHAR(50) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`rated` CHAR(50) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`released_on` CHAR(50) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`genre` CHAR(50) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`director` CHAR(50) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`plot` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`created_at` DATETIME NULL DEFAULT NULL,
	`updated_at` DATETIME NULL DEFAULT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='utf8_unicode_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;

### Rates table

CREATE TABLE `rates` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`id_movie` INT(11) NOT NULL DEFAULT '0',
	`comment` VARCHAR(500) NOT NULL DEFAULT '0' COLLATE 'utf8_unicode_ci',
	`rate` INT(11) NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`),
	INDEX `FK_rates_movies` (`id_movie`),
	CONSTRAINT `FK_rates_movies` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`)
)
COLLATE='utf8_unicode_ci'
ENGINE=InnoDB
AUTO_INCREMENT=12
;

### Insert movies

INSERT INTO movies VALUES
    (1,'https://www.caratulas.com/peliculas/peliculas/G/Guardianes_De_La_Galaxia/Guardianes_De_La_Galaxia-Cartel.jpg','Guardians of the Galaxy',2017,'PG-13','2017-05-05 00:00:00','Action, Adventure, Comedy, Sci-Fi','James Gunn','James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)', null, null),
    (2,'https://www.caratulas.com/peliculas/peliculas/I/Interstellar/Interstellar-Cartel.jpg','Interstellar',2014,'PG-13','2014-11-07 00:00:00','Adventure, Drama, Sci-Fi','Christopher Nolan','A team of explorers travel through a wormhole in space in an attempt to ensure humanity''s survival.', null, null),
    (3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiC3mSrAdG2_Tkuz5CbCm2TA-wYikac3dOPVlzb5jCk1gqsHOD','Avengers: Endgame',2019,'PG-13','2019-04-26 00:00:00','Action, Adventure, Sci-Fi','Anthony Russo, Joe Russo','After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos'' actions and restore balance to the universe.', null, null),
    (4,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJUXmK61D6xj8qitOW7G4EBJ0W6J1opB0KHB51jNXcLweHCr9s','Toy Story 4',2019,'PG-13','2019-06-21 00:00:00','Animation, Adventure, Comedy, Family, Fantasy','Josh Cooley','When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.', null, null),
    (5,'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5T11lO5NUu09B5i37f3QC6VQVRMs2kkTrcwnYV9A3y--NUgI5','Star Wars: The Rise of Skywalker',2019,'PG-13','2019-12-20 00:00:00','Action, Adventure, Fantasy, Sci-Fi','J.J. Abrams','The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.', null, null),
    (6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrR2wjVfAucVBIaE048zDXv2G3cHCmxetx27P8HHsI7wr3yoJ','Captain Marvel',2019,'PG-13','2019-03-08 00:00:00','Action, Adventure, Sci-Fi','Anna Boden, Ryan Fleck','Carol Danvers becomes one of the universe''s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.', null, null),
    (7,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUwilLyU4GtFBLzXkfM7f_KRep_7qXK9e30Zlix6JlO6DOoI82','Spider-Man: Far From Home',2019,'PG-13','2019-07-02 00:00:00','Action, Adventure, Sci-Fi','Jon Watts','Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.', null, null);
