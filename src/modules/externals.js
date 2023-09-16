const externals = {
    getOsrs: async function (playerName) {
        const url = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + playerName

        const osrsStats = await fetch(url)
            .then(response => response.text())
            .then(data => {
                return data
            })
        return osrsStats
    }
}
export default externals;
export const getOsrs = externals.getOsrs
