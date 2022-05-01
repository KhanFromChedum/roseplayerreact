class Favorite {
    static GetAll()
    {
        let favorite = JSON.parse(localStorage.getItem("Favorite"));

        if (favorite === null) {
            favorite = new Array();
        }

        return favorite;
    }

    static Add(station) {
        console.log(station.stationuuid);
        let favorite = JSON.parse(localStorage.getItem("Favorite"));
        if (Favorite.Exist(station)) {
            return;
        }
        if (favorite === null) {
            favorite = new Array();
        }
        favorite.push(station.stationuuid);
        localStorage.setItem("Favorite", JSON.stringify(favorite));
    }

    static Remove(station) {
        console.log(station.stationuuid);
        let favorite = JSON.parse(localStorage.getItem("Favorite"));
        if (favorite === null) {
            return;
        }

        let uuidPos = favorite.indexOf(station.stationuuid);
        if (uuidPos === -1) {
            return;
        }
        favorite.splice(uuidPos, 1);
        localStorage.setItem("Favorite", JSON.stringify(favorite));
    }

    static Exist(station) {
        let favorite = JSON.parse(localStorage.getItem("Favorite"));
        if (favorite === null) {
            return false;
        }
        let uuidPos = favorite.indexOf(station.stationuuid);
        if (uuidPos === -1) {
            return false;
        }
        return true;
    }
}

export default Favorite;