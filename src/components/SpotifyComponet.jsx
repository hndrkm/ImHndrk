import { useState, useEffect } from 'react';
import FFTVisualizer from './FFTVisualizer';
import SpotifyLink from './SpotifyLink';

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
        <div className='h-full'>
            {error && <p>{error}</p>}
            {previewUrl ? (
                <div className='flex flex-col h-full'>
                    <div className='flex justify-center'>
                        <div className='font-bold flex'>
                            <img className='h-30 w-30 border-2' src={trackR.album.images[2].url}></img>
                            <div className='pl-2'>
                                Artista: {trackR.artists[0].name}
                                <div>Album: {trackR.album.name}</div>
                                <h3>Cancion: {trackName}</h3>
                            </div>
                        </div>
                    </div>

                    <FFTVisualizer previewUrl={previewUrl} name={trackName}/>
                    <div className='flex pt-1 justify-center bg-black'>
                        <p className='text-xs'>La musica se selecciona aleatoreamente de mi lista de reproducción de spotify:</p>
                        <SpotifyLink />
                    </div>

                </div>
            ) : (
                <p>Cargando una pista aleatoria...</p>
            )}
        </div>
    )
}
export default SpotifyComponet;