class Api::V1::GamesController < ApplicationController
  def index
    games = {
      "count": Game.all.count,
      "game": Game.all
    }
    render json: games
  end

  def create
    game = Game.new(turnCount: params[:game][:turnCount], gameID: params[:game][:gameID])
    if game.save
    end
    params[:game][:players].each do |player|
      player_data = {
        name: player[:name], color: player[:color], points: player[:points], settlementCount: player[:settlementCount], roadCount: player[:roadCount], bricks: player[:bricks], ores: player[:ores], wools: player[:wools],
        lumbers: player[:lumbers], grains: player[:grains], settlement_ids: player[:settlement_ids], road_ids: player[:road_ids], gameID: game[:gameID]
      }
      player = Player.new(player_data)
      player.game = Game.find_by(gameID: player.gameID)
      if player.save
        saved = Game.find_by(gameID: player.gameID)
        saved.players << Player.find(player.id)
      end
    end
  end

  def update
    game = Game.find_by(gameID: params[:game][:gameID])

    for id in game.player_ids
      found_player = Player.find(id)
      index = game.player_ids.index(id)
      new_stats = params[:game][:players][index]
      if found_player.update(points: new_stats[:points], settlementCount: new_stats[:settlementCount], roadCount: new_stats[:roadCount], bricks: new_stats[:bricks], ores: new_stats[:ores], wools: new_stats[:wools], lumbers: new_stats[:lumbers], grains: new_stats[:grains], settlement_ids: new_stats[:settlement_ids], road_ids: new_stats[:road_ids])
      end
    end

    if game.update(turnCount: params[:game][:turnCount])
    end
  end

  def show
    game = Game.find(params[:id])
    render json: game
  end

  private
  def game_params(*args)
    params.require(:game).permit(args)
  end
end
