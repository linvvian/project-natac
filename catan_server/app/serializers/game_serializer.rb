class GameSerializer < ActiveModel::Serializer
  attributes :id, :turnCount, :player_count
  has_many :players

  def player_count
    object.players.count
  end
end
