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
    getCarbon: async function(webUrl) {
        try {
            let url = "https://api.websitecarbon.com/site?url=" + webUrl;
            console.log("url:", url);
            const response = await fetch(url);
            if (!response.ok) {
                // throw new Error(`Failed to fetch data. Status: ${response.status}`);
                return {
                    cleanerThan: 0.89,
                    statistics: { co2:{ grid: { grams: 0.12} } }
                };
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching carbon data:", error);
            throw error;
        }
    }
}
export default externals;
export const getOsrs = externals.getOsrs
export const getCarbon = externals.getCarbon
