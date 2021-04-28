function goBack(event, valueBack = 1) {
    const temp = this.$router.currentRoute.fullPath.split('/')
    temp.splice((temp.length-valueBack), valueBack)

    if (temp.length > 1) {
        this.$router.push(`${temp.join('/')}`)
    } else {
        this.$router.push('/')
    }
}

function goUrl(url) {
    this.$router.push(url)
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function externLink(link) {
    let finalLink = "";
    let target = "_blank"

    if (isMobile()) {
        finalLink = 'medics://viewer?m_source=';
        target = "_self"
    }
    finalLink += link;
    window.open(finalLink, target);
}

export {goBack, goUrl, isMobile, externLink};
