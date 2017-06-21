class Api::V1::TilesController < ApplicationController
  def index
    render json: Tile.all
  end

  def show
    tile = Tile.find(params[:id])
    render json: tile
  end
end
