class Api::V1::PlayersController < ApplicationController
  def index
    render json: Player.all
  end

  def create
    players = params[:players]

    players.each do |play|
      player = Player.new(name: play[:name], points: play[:points], color: play[:color], settlementCount: play[:settlementCount], roadCount: play[:roadCount], bricks: play[:bricks], ores: play[:ores], wools: play[:wools], lumbers: play[:lumbers], grains: play[:grains])
      play[:settlements].each { |e| player.settlements << Settlement.find(e) }
      play[:roads].each { |e| player.roads << Road.find(e) }
      if player.save
        next
      else
        render json: {message: player.errors.full_messages, status: 500}
      end
      
    end
    # render json: {message: "yay", status: 200}
  end

  # def update
  #   players = params[:players]
  #
  #   players.each do |play|
  #     player = Player.find_by(name: play[:name], color: play[:color])
  #     if player.update(points: play[:points], settlementCount: play[:settlementCount], roadCount: play[:roadCount], bricks: play[:bricks], ores: play[:ores], wools: play[:wools], lumbers: play[:lumbers], grains: play[:grains])
  #       play[:settlements].each { |e| player.settlements << Settlement.find(e) }
  #       play[:roads].each { |e| player.roads << Road.find(e) }
  #       next
  #     else
  #       render json: {message: player.errors.full_messages, status: 500}
  #     end
  #   end
  #   render json: {message: "yay", status: 200}
  # end

  def show
    render json: Player.find(params[:id])
  end

end
