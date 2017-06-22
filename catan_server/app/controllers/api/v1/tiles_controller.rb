require "pry"
class Api::V1::TilesController < ApplicationController
  def index
    render json: Tile.all
  end

  def create
    binding.pry
    tiles = params.require(:tiles).permit(tile: [:id, :top, :left])
    tiles.each do |t|
      Tile.new(t)
      if t.save
        render json: {message: "created tile!", status: 200}
      else
        render json: {message: agent.errors.full_messages, status: 500}
      end
    end
    tile = Tile.new(params.require(:tiles).permit(:tiles))

  end

  def show
    tile = Tile.find(params[:id])
    render json: tile
  end
end
