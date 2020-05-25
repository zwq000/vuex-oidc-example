//export const oidcSettings = JSON.parse(process.env.VUE_APP_OIDC_CONFIG)

const baseUrl = 'http://192.168.1.27:5002';
const identityHost = 'http://192.168.1.27:9010'
export const oidcSettings = {
    authority: identityHost,
    clientId: 'vuex-oidc',
    //redirectUri: 'http://localhost:5002/oidc-callback',
    redirectUri:`${baseUrl}/oidc-callback`, //`${baseUrl}/oidc-popup-callback`,
    post_logout_redirect_uri:`${baseUrl}`,
    silentRedirectUri: `${baseUrl}/oidc-silent-renew.html`,
    responseType: 'id_token token',
    scope: 'openid profile psc.pldc'
}