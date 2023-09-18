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
        let url = "https://api.websitecarbon.com/site?url=" + webUrl
        console.log("url");
        console.log(url);
        console.log("url");
        const response = await fetch(url)
            .then(response => response.json())
            .then(data => {
                return data
            })
        return response
        // Check if the request was successful
        // if (response.ok) {
        //     const carbonData = await response.json(); // This will contain the carbon emissions data
        //     return carbonData;
        // } else {
        //     throw new Error('Failed to fetch carbon data');
        // }

    }
}
export default externals;
export const getOsrs = externals.getOsrs
export const getCarbon = externals.getCarbon
