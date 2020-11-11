CREATE TABLE User(
	uid int not null primary key auto_increment,
    username varchar(255),
    password varchar(255),
    gender enum("Male","Female"),
    email varchar(255),
    created_at timestamp default NOW(),
    location varchar(255)
);

CREATE TABLE Film(
	id int not null primary key,
    certificate enum("R","G","PG-13","Approved"),
    titles varchar(255),
    titlesVN varchar(255),
	runtime varchar(255),
    genre varchar(255),
    rates numeric(9,1),
    directors varchar(255),
    images varchar(255),
    releaseYear int
);

CREATE TABLE watchedFilm(
	user int,
    film int, 
    time_watched timestamp default NOW(),
    foreign key (user) references User(uid) on delete cascade,
    foreign key (film) references Film(id)
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
    user int,
    duration int,
    type varchar(255),
    time_start timestamp, 
    time_end timestamp,
    foreign key (user) references User(uid) on delete cascade
);
