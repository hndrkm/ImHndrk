import { useState, useEffect } from 'react';
import FFTVisualizer from './FFTVisualizer';

function SpotifyComponet() {
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [trackR, setTrackR] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [trackName, setTrackName] = useState('');
    const query = "qwerty";

    var client_id = 'a11a6f630a744aeb92dc2ad08f5bbff4';
    var client_secret = '07f99843dd6d4d9c94105be490643840';
    useEffect(() => {
        async function getTokenAnom() {
            const authUrl = 'https://accounts.spotify.com/api/token';
            const authString = `${client_id}:${client_secret}`;
            const encodedAuthString = btoa(authString);
            const formBody = new URLSearchParams();
            formBody.append('grant_type', 'client_credentials');

            const response = await fetch(authUrl, {
                method: "POST",
                headers: {
                    'Authorization': 'Basic ' + encodedAuthString,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody,
            })

            if (response.ok) {
                const data = await response.json();
                setToken(data.access_token);
                console.log(data)
            } else {
                const errorData = await response.json();
                setError(errorData.error);
            }
        }

        getTokenAnom();

    }, []);

    useEffect(() => {
        if (token == null) return;
        const fetchRandomTrack = async () => {
            const response = await fetch(
                `https://api.spotify.com/v1/playlists/6PdonZs9fBThp2zMcUO11h/`, // https://api.spotify.com/v1/search?q=${query}&type=track&limit=50
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();


            if (data.tracks && data.tracks.items.length > 0) {
                // Seleccionar una pista aleatoria
                const randomIndex = Math.floor(Math.random() * data.tracks.items.length);
                const randomTrack = data.tracks.items[randomIndex];
                console.log(randomTrack)
                setTrackR(randomTrack.track)
                if (randomTrack.track.preview_url) {
                    setPreviewUrl(randomTrack.track.preview_url);
                    setTrackName(randomTrack.track.name);
                } else {
                    setError('No hay preview disponible para la pista seleccionada.');
                }
            } else {
                setError('No se encontraron pistas para la búsqueda.');
            }
        }

        fetchRandomTrack();
    }, [token])

    return (
        <div>
            {error && <p>{error}</p>}
            {previewUrl ? (
                <>
                    <div>
                        <div>Escucha un poco de la musica que me gusta: </div>
                        <div className="w-10 h-10">
                            <a className="" title="logo" href="https://open.spotify.com/playlist/5SPUwYjCTgAWwtNZepPgXh?go=1&amp;sp_cid=bc9ade461c2013760a7d7bcac88973a5&amp;utm_source=embed_player_p&amp;utm_medium=desktop" role="button" aria-label="Play on Spotify" data-testid="spotify-logo">
                                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                                    <path d="M12.438 1.009C6.368.769 1.251 5.494 1.008 11.565c-.24 6.07 4.485 11.186 10.556 11.426 6.07.242 11.185-4.484 11.427-10.554.242-6.07-4.484-11.186-10.553-11.428Zm4.644 16.114a.657.657 0 0 1-.897.246 13.22 13.22 0 0 0-4.71-1.602 13.197 13.197 0 0 0-4.968.242.658.658 0 0 1-.31-1.278 14.497 14.497 0 0 1 5.46-.265c1.837.257 3.579.851 5.177 1.76.315.178.425.58.246.896l.002.002Zm1.445-2.887a.853.853 0 0 1-1.158.344 16.214 16.214 0 0 0-5.475-1.797 16.188 16.188 0 0 0-5.758.219.855.855 0 0 1-1.018-.65.852.852 0 0 1 .65-1.018 17.92 17.92 0 0 1 6.362-.241 17.87 17.87 0 0 1 6.049 1.985c.415.224.57.743.344 1.158h.004Zm1.602-3.255a1.052 1.052 0 0 1-1.418.448 19.673 19.673 0 0 0-6.341-2.025 19.642 19.642 0 0 0-6.655.199 1.05 1.05 0 1 1-.417-2.06 21.725 21.725 0 0 1 7.364-.22 21.72 21.72 0 0 1 7.019 2.24c.515.268.715.903.448 1.418Z" fill="#FFffff">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div className='font-bold flex'>
                            <img src={trackR.album.images[1].url}></img>
                            <div>
                                Artista: {trackR.artists[0].name}
                                <div>Album: {trackR.album.name}</div>
                                <h3>Cancion: {trackName}</h3>
                            </div>

                        </div>
                        {/*
 <audio controls autoPlay>
                            <source src={previewUrl} type="audio/mpeg" />
                            Tu navegador no soporta la reproducción de audio.
                        </audio>
                        */}

                    </div>
                    <FFTVisualizer previewUrl={previewUrl} />
                    <p className='text-xs'>La musica se selecciona aleatoreamente de mi lista de reproducción de spotify</p>
                </>


            ) : (
                <p>Cargando una pista aleatoria...</p>
            )}
        </div>
    )
}
export default SpotifyComponet;