class Api::V1::PlayersController < ApplicationController
  def index
    render json: Player.all
  end

  def create
    players = params.require(:players).map do |player|
      player.permit(:settlements, :roads, :resources, :name, :points, :settlementCount, :roadCount, :color)
    end
    player.each do |p|
      player = Player.new(p)
      if player.save
        next
      else
        render json: {message: player.errors.full_messages, status: 500}
      end
    end
    render json: {message: "yay", status: 200}
  end

  def show
    render json: Player.find(params[:id])
  end
end
