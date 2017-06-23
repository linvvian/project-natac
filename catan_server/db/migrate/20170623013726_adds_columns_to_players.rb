class AddsColumnsToPlayers < ActiveRecord::Migration[5.1]
  def change
    add_reference :settlements, :players, index: true
    add_reference :roads, :players, index: true
    add_column :players, :bricks, :integer
    add_column :players, :wools, :integer
    add_column :players, :lumbers, :integer
    add_column :players, :grains, :integer
    add_column :players, :ores, :integer
    add_column :players, :color, :string
    remove_column :players, :wins
    remove_column :players, :losses
  end
end
