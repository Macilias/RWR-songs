export const selectSong = (song) => {
	console.log('select song has been called with song', song);
	return {
		type: 'SONG_SELECTED',
		payload: song,
	}
};
