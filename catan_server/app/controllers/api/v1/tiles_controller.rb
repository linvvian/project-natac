class Api::V1::TilesController < ApplicationController
  def index
    render json: Tile.all
  end

  def update
    tiles = params.require(:tiles).map do |tile|
      tile.permit(:id, :top, :left, :width, :height, :className, :resource, :value)
    end

    tiles.each do |t|
      inTile = Tile.find(t[:id])
      if inTile.update(top: t[:top], left: t[:left], resource: t[:resource], value: t[:value])
        next
      else
        render json: {message: agent.errors.full_messages, status: 500}
      end
    end
    render json: {message: "updated tile!", status: 200}
  end

  def show
    tile = Tile.find(params[:id])
    render json: tile
  end
end
