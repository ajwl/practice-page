require 'sinatra'

class App < Sinatra::Base

  get '/' do
    erb :index, :layout => :layout
  end

end

