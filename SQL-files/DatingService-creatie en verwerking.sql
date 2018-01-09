CREATE DATABASE DatingService;

USE DatingService;


CREATE TABLE kandidaten(
kandnaam varchar(10) NOT NULL, 
geslacht char(1) NOT NULL );

INSERT INTO Kandidaten VALUES ('Jef','M');
INSERT INTO Kandidaten VALUES ('Mark','M');
INSERT INTO Kandidaten VALUES ('Leen','V');
INSERT INTO Kandidaten VALUES ('Sofie','V');

select m.kandnaam,v.kandnaam
from kandidaten m, kandidaten v
where m.geslacht = 'm' and v.geslacht='v'
order by 1;

