class ApplicationController < ActionController::API

  APP_SECRET = 'unicornturkey'

  def authenticate

    decoded_token = JWT.decode(request.headers['Authorization'], APP_SECRET, true, {algorithm: 'HS256'})
    user = User.find(decoded_token[0]['user_id'])
    if user
      @current_user = user
    else
      raise 'Unathorized Access'
    end
  end
end
