const mapServerGameToClient = (game) => ({
  id: game.id,
  name: game.name,
  numberOfPlayers: game.number_of_players,
  startTime: game.wait_time
});

export { mapServerGameToClient };
