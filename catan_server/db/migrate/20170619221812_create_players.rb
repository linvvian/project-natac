class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :wins
      t.integer :losses
      t.integer :points

      t.timestamps
    end
  end
end
