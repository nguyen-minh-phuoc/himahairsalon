const formatFacebookLink = ( link , pageId ) => {
    const mobileOS = getMobileOperatingSystem();
    let fbLink = link;
    if(mobileOS === "Android")
    {
        fbLink = "fb://facewebmodal/f?href=" + link;
    }
    else if(mobileOS === "iOS")
    {
        fbLink = "fb://page/" + pageId;
    }    
    return fbLink
};

const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
export default formatFacebookLink;