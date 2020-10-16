CREATE TABLE User(
	uid int not null primary key,
    username varchar(255),
    password varchar(255),
    gender enum("Male","Female"),
    email varchar(255),
    created_at timestamp default NOW(),
    location varchar(255)
);

CREATE TABLE Film(
	show_id int not null primary key,
    type enum("TV Show","Movie"),
    title varchar(255),
    director varchar(255),
    country varchar(255),
    date_added varchar(255),
    release_year int,
    cast varchar(255),
    rating varchar(255),
    duration varchar(255),
    listed_in varchar(255),
    description varchar(255)
);

CREATE TABLE watchedFilm(
	user int,
    film int, 
    time_watched timestamp default NOW(),
    foreign key (user) references User(uid) on delete cascade,
    foreign key (film) references Film(show_id)
);

CREATE TABLE Favorite(
	user int, 
    favorite varchar(255),
    foreign key (user) references User(uid) on delete cascade
);

CREATE TABLE searchResult(
	user int,
    search varchar(255),
    foreign key (user) references User(uid) on delete cascade
);

CREATE TABLE Subscription(
	sub_id int not null auto_increment primary key,
    user int,
    duration int,
    type varchar(255),
    time_start timestamp, 
    time_end timestamp,
    foreign key (user) references User(uid) on delete cascade
);
