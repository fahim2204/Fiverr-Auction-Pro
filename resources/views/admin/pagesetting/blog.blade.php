@extends('layouts.admin')
@section('content')

            <div class="content-area">
              <div class="mr-breadcrumb">
                <div class="row">
                  <div class="col-lg-12">
                      <h4 class="heading">{{__('Latest Blog Section')}} </h4>
                      <ul class="links">
                        <li>
                          <a href="{{ route('admin.dashboard') }}">{{__('Dashboard')}} </a>
                        </li>
                        <li>
                          <a href="javascript:;">{{__('Home Page Settings')}} </a>
                        </li>
                        <li>
                          <a href="{{ route('admin-ps-blog') }}">{{__('Latest Blog Section')}} </a>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
              <div class="add-product-content">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="product-description">
                      <div class="body-area">

                                <div class="gocover" style="background: url({{asset('assets/images/'.$gs->admin_loader)}}) no-repeat scroll center center rgba(45, 45, 45, 0.5);"></div>
                      <form id="geniusform" action="{{ route('admin-ps-update') }}" method="POST" enctype="multipart/form-data">
                        {{csrf_field()}}

                        @include('includes.admin.form-both')  

                        <div class="row">
                          <div class="col-lg-4">
                            <div class="left-area">
                                <h4 class="heading">{{__('Subtitle')}} *</h4>
                            </div>
                          </div>
                          <div class="col-lg-7">
                            <textarea class="input-field" name="blog_subtitle" placeholder="{{__('Subtitle')}}" required="" rows="5">{{$data->blog_subtitle}}</textarea>

                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-4">
                            <div class="left-area">
                                <h4 class="heading">{{__('Title')}} *</h4>
                            </div>
                          </div>
                          <div class="col-lg-7">
                          <textarea class="input-field" name="blog_title" placeholder="{{__('Title')}}" required="" rows="5">{{$data->blog_title}}</textarea>

                          </div>
                        </div>


                        <div class="row">
                          <div class="col-lg-4">
                            <div class="left-area">
                                <h4 class="heading">{{__('Text')}} *</h4>
                            </div>
                          </div>
                          <div class="col-lg-7">
                          <textarea class="input-field" name="blog_text" placeholder="{{__('Text')}}" required="" rows="5">{{$data->blog_text}}</textarea>

                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-4">
                            <div class="left-area">
                                          
                            </div>
                          </div>
                          <div class="col-lg-7">
                              <button class="addProductSubmit-btn" type="submit">{{__('Save')}}</button>
                          </div>
                      </div>

                      </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

@endsection