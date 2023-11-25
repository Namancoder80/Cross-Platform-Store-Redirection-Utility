const playStoreUrl = "https://google.com";
const appStoreUrl = "";
/**
 * This function returns the userPlatform like
 * @returns "android ,ios,windows"
 */
function getDeviceType() {
  const UserPlatform = navigator.userAgent.toLocaleLowerCase();

  if (UserPlatform.includes("android")) {
    return "android";
  } else if (UserPlatform.includes("iphone") || UserPlatform.includes("ipad")) {
    return "ios";
  } else if (UserPlatform.includes("windows")) {
    return "Windows";
  } else {
    return "other";
  }
}
/**
 *This function will redirect the user to current target store
 */
function redirectToStore() {
  var UserPlatform = getDeviceType();
  if (UserPlatform === "android") {
    window.location.replace(playStoreUrl);
  } else if (UserPlatform === "ios") {
    window.location.replace(appStoreUrl);
  } else if (UserPlatform === "Windows") {
    window.location.replace("https://www.youtube.com/");
  }
}
redirectToStore();
