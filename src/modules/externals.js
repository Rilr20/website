require('dotenv').config()
const externals = {
    getOsrs: async function (playerName) {
        const url = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + playerName

        const osrsStats = await fetch(url)
            .then(response => response.text())
            .then(data => {
                return data
            })
        return osrsStats
    },
    getCarbon: async function (webUrl) {
        try {
            let url = "https://api.websitecarbon.com/site?url=" + webUrl;
            const response = await fetch(url);
            if (!response.ok) {
                // throw new Error(`Failed to fetch data. Status: ${response.status}`);
                return {
                    cleanerThan: 0.89,
                    statistics: { co2: { grid: { grams: 0.12 } } }
                };
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching carbon data:", error);
            throw error;
        }
    },
    getAlbums: async function () {
        // const url = `http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=${process.env.NEXT_PUBLIC_lastfm_username}&api_key=${process.env.NEXT_PUBLIC_lastfm_api}&format=json`
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${process.env.NEXT_PUBLIC_lastfm_username}&period=7day&api_key=${process.env.NEXT_PUBLIC_lastfm_api}&limit=4&format=json`
        const response = await fetch(url);
        if (!response.ok) {
            return {
                error: "something went wrong"
            }
        }
        const data = await response.json();
        return data;
    },
    getSteam: async function () {
        const url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.NEXT_PUBLIC_steam_api}&steamid=${process.env.NEXT_PUBLIC_steam_id}&count=2&format=json`
        const response = await fetch(url);
        if (!response.ok) {
            return {
                error: "something went wrong"
            }
        }
        const data = await response.json();
        return data;
    },
}
export default externals;
export const getOsrs = externals.getOsrs;
export const getCarbon = externals.getCarbon;
export const getAlbums = externals.getAlbums;
export const getSteam = externals.getSteam;
