# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170622194621) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "player_roads", force: :cascade do |t|
    t.bigint "player_id"
    t.bigint "roads_id"
    t.index ["player_id"], name: "index_player_roads_on_player_id"
    t.index ["roads_id"], name: "index_player_roads_on_roads_id"
  end

  create_table "player_settlements", force: :cascade do |t|
    t.bigint "player_id"
    t.bigint "settlement_id"
    t.index ["player_id"], name: "index_player_settlements_on_player_id"
    t.index ["settlement_id"], name: "index_player_settlements_on_settlement_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "wins"
    t.integer "losses"
    t.integer "points"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roads", force: :cascade do |t|
    t.integer "top_coordinate"
    t.integer "left_coordinate"
    t.bigint "player_id"
    t.index ["player_id"], name: "index_roads_on_player_id"
  end

  create_table "roads_settlements", force: :cascade do |t|
    t.bigint "settlement_id"
    t.bigint "road_id"
    t.index ["road_id"], name: "index_roads_settlements_on_road_id"
    t.index ["settlement_id"], name: "index_roads_settlements_on_settlement_id"
  end

  create_table "settlements", force: :cascade do |t|
    t.integer "x_coordinate"
    t.integer "y_coordinate"
    t.bigint "player_id"
    t.bigint "roads_id"
    t.index ["player_id"], name: "index_settlements_on_player_id"
    t.index ["roads_id"], name: "index_settlements_on_roads_id"
  end

  create_table "settlements_tiles", force: :cascade do |t|
    t.bigint "tile_id"
    t.bigint "settlement_id"
    t.index ["settlement_id"], name: "index_settlements_tiles_on_settlement_id"
    t.index ["tile_id"], name: "index_settlements_tiles_on_tile_id"
  end

  create_table "tiles", force: :cascade do |t|
    t.integer "top"
    t.integer "left"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "width"
    t.integer "height"
    t.string "className"
    t.string "resource"
    t.integer "value"
  end

  add_foreign_key "player_roads", "players"
  add_foreign_key "player_roads", "roads", column: "roads_id"
  add_foreign_key "player_settlements", "players"
  add_foreign_key "player_settlements", "settlements"
  add_foreign_key "roads", "players"
  add_foreign_key "roads_settlements", "roads"
  add_foreign_key "roads_settlements", "settlements"
  add_foreign_key "settlements", "players"
  add_foreign_key "settlements", "roads", column: "roads_id"
end
