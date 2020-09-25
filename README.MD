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

`CREATE TABLE `movies` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` CHAR(50) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`image` VARCHAR(250) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
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
;`

### Rates table

`CREATE TABLE `rates` (
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
`