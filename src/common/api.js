export const API_URL = 'http://api.tvmaze.com/';                                            // BASE API URL
export const FETCH_SHOW = `${API_URL}shows`;                                                // FETCH SHOWS URL
export const FETCH_SHOW_INFO = `${API_URL}shows/`;                                          // FETCH ONE SPECIFIC SHOW INFORMATION URL
export const SEARCH_SHOW = `${API_URL}search/shows?q=`;                                     // FETCH FILTERED SHOWS URL
export const fetch_episodes_url = id => `http://api.tvmaze.com/shows/${id}/episodes`;       // FETCH EPISODES URL