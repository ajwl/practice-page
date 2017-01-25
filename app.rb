require 'sinatra'

class App < Sinatra::Base

  get '/' do
    erb :index, :layout => :layout
  end

  post '/message' do
    "Thanks for your exciting message"
  end

end

