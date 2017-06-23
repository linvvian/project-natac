class AddGameIdToPlayers < ActiveRecord::Migration[5.1]
  def change
    add_reference :players, :game, foreign_key: true, null: true
    add_column :players, :gameID, :string
  end
end
