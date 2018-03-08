drop database takenlijst;
create database takenlijst;
USE takenlijst;
CREATE TABLE USERS (
	ID integer NOT NULL AUTO_INCREMENT, 
    USERNAME varchar (35) NOT NULL,
	WACHTWOORD varchar (15) NOT NULL,
    FIRSTNAME varchar (20) NOT NULL,
    LASTNAME varchar (35) NOT NULL,
    PRIMARY KEY (ID)
);
CREATE UNIQUE INDEX IDX_USERNAME ON USERS (USERNAME);

CREATE TABLE CATEGORIE (
	CATID integer NOT NULL AUTO_INCREMENT,
    ID integer NOT NULL,
    CATNAME varchar (50) NOT NULL,
    PRIMARY KEY (CATID),
    FOREIGN KEY (ID) REFERENCES USERS(ID)
);

CREATE TABLE TAAK (
	TAAKID integer NOT NULL AUTO_INCREMENT,
	PARENTCATIDT integer,
    TITEL varchar (50),
	TAAKOMSCHR varchar (150),
    PRIMARY KEY (TAAKID),
    FOREIGN KEY (PARENTCATIDT) REFERENCES CATEGORIE(CATID)
);

CREATE TABLE SUBCATEGORIE (
	SUBCATID integer NOT NULL,
    PARENTCATIDC integer,
    PRIMARY KEY (SUBCATID),
    FOREIGN KEY (PARENTCATIDC) REFERENCES CATEGORIE(CATID)
);

INSERT INTO `takenlijst`.`users` (`USERNAME`, `WACHTWOORD`, `FIRSTNAME`, `LASTNAME`) VALUES ('joske', 'joske', 'joske', 'vermeulen');

SELECT * FROM categorie;
SELECT * FROM taak;
Select * FROM subcategorie;

SELECT c.CATID, c.CATNAME, s.PARENTCATIDC, t.PARENTCATIDT, t.TITEL, t.TAAKOMSCHR FROM CATEGORIE c LEFT OUTER JOIN SUBCATEGORIE s ON s.SUBCATID = c.CATID LEFT OUTER JOIN TAAK t ON t.PARENTCATIDT = c.CATID ORDER BY CATNAME;