class Api::V1::TilesController < ApplicationController
  def index
    render json: Tile.all
  end

  def create
    tiles = params.require(:tiles).map do |tile|
      tile.permit(:top, :left, :width, :height, :className, :resource, :value)
    end
    tiles.each do |t|
      tile = Tile.new(t)
      if tile.save
        next
      else
        render json: {message: agent.errors.full_messages, status: 500}
      end
    end
    render json: {message: "yay", status: 200}
  end

  def update
    tiles = params.require(:tiles).map do |tile|
      tile.permit(:id, :top, :left)
    end
    tiles.each do |t|
      if t.update(id: t.id, top: t.top, left: t.left)
        next
      else
        render json: {message: agent.errors.full_messages, status: 500}
      end
    end
    render json: {message: "created tile!", status: 200}
  end

  def show
    tile = Tile.find(params[:id])
    render json: tile
  end
end
