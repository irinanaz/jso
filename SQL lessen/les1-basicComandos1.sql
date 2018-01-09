CREATE DATABASE  jso;

USE jso;

CREATE TABLE cursist(
	cid INT NOT NULL PRIMARY KEY, -- VERPLICHT VELD (commentaar 1 lijn)
    NAAM CHAR(50) NOT NULL,  /* bij CHAR moeten we max aantal ckarakters bepalen.
								zoveel wordt er gerezerveerd w. Sneller op zoeken*/
    VOORNAAM VARCHAR(10) NOT NULL, -- Er word dan max karakters gereserveerd worden. gerezerveerd zoveel als gebruikt. Minder snel op zoeken.
    /* NCHAR en NVARCHAR als we unicode willen gebruiken.*/
    GEBOORTEDATUM DATE NULL, -- mag wel leeg zjin.
    GESLACHT BIT DEFAULT 1
    ); -- DEFAULT WAARDE
/* gegevens op te vragen: *****************/
SELECT *
FROM cursist ;

/* EEN newe rij toe voegen***************************/
INSERT INTO cursist VALUES
-- ' ' enkele aanhalingstekens voor strings.
-- voor VALUES moeten ALLE velen ingevuld zijn zelfs als er default waarde bepaald is.
(9, 'Vermeulen','Joske', '1988-06-02',1);

INSERT INTO cursist VALUES
(9, 'De Bolle','Octaaf', NULL, 1);

INSERT INTO cursist (voornaam,naam,cid) VALUES
('Jeanine','Praline', 11);

SELECT *
FROM cursist ;

INSERT INTO cursist (voornaam,naam,cid) VALUES
('Isabel','Kapot', 12),
('Peter', 'Selie',13);


SELECT *
FROM cursist ;

/*Foutieve situaties *************************/
INSERT INTO cursist (voornaam,naam,cid) VALUES
('Oeps','Foutje', 11);
INSERT INTO cursist (voornaam,naam,cid) VALUES
('Veeltelangevoornaam','Foutje', 14);
/*********************************************/

/* tabel met alle inhoud verwijderen *********
DROP TABLE cursist;

**/

/* DB met alle inhoud te verwijderen 
DROP DATABANK jso;
*/