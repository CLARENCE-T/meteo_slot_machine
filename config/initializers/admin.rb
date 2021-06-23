RailsAdmin.config do |config|
  config.model 'Song' do
    list do
      field :name
      field :clock
      field :weather
      field :place
      field :url
    end
  end
  config.included_models = %w(Song Clock Weather Place)
end
