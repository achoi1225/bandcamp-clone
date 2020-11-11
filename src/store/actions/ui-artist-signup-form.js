export const HIDE_ARTIST_SIGNUP_FORM = "songcamp/ui-artist-signup/HIDE_FORM";
export const SHOW_ARTIST_SIGNUP_FORM = "songcamp/ui-artist-signup/SHOW_FORM";

export const hideArtistSignupForm = () => ({
    type: HIDE_ARTIST_SIGNUP_FORM
})

export const showArtistSignupForm = () => ({
    type: SHOW_ARTIST_SIGNUP_FORM
})