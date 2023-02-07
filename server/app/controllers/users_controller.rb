class UsersController < ApplicationController
  APP_SECRET = 'unicornturkey'
  before_action :authenticate, only: [:show, :me]

  def me
    render json: {user: @current_user}, status: 200
  end

  def index
    render json: User.all, status: 200
  end

  def show
    user = User.find(params[:id])
    if @current_user.id == user.id
      render json: {user: user}, status: 200
    else
      render json: {error: "Access denied, authorization required"}, status: 401
    end
  end

  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      token = JWT.encode({user_id: user.id, username: user.username}, APP_SECRET, 'HS256')
      render json: {user: user, token: token}, status: 200
    else
      render json: {error: "Invalid email or password"}, status: 422
    end
  end

  def create
    user = User.new(email: params[:email], password: params[:password], username: params[:username])
    if user.save
      render json: {user: user, token: nil}, status: 200
    else
      render json: {error: user.errors.full_messages}, status: 422
  end

  def update

  end

  def destroy

  end
end
