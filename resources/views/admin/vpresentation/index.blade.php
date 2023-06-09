@extends('layouts.admin') 

@section('content')  
          <input type="hidden" id="headerdata" value="PRESENTATION">
          <div class="content-area">
            <div class="mr-breadcrumb">
              <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">{{__('Video Presentation Section')}}</h4>
                    <ul class="links">
                      <li>
                        <a href="{{ route('admin.dashboard') }}">{{__('Dashboard')}} </a>
                      </li>
                      <li>
                        <a href="{{ route('admin-vpresentation-index') }}">{{__('Video Presentation Section')}}</a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="product-area">

              <div class="row">
                <div class="col-lg-12 px-5 pt-5">
                  <div class="card mb-5">
                    <div class="card-header infos">
                      <h4 class="text-white text-uppercase mb-0">{{__('Informations')}}</h4>
                    </div>
                    <div class="card-body">
                      <div class="gocover" style="background: url({{ asset('assets/images/'.$gs->admin_loader) }}) no-repeat scroll center center rgba(45, 45, 45, 0.5);"></div>
                      @include('includes.admin.form-both')
                      <form id="geniusform" action="{{ route('admin-ps-update') }}" method="post" enctype="multipart/form-data">
                        {{ csrf_field() }}

                        <div class="row">

                          <div class="col-lg-6">
                            <div class="form-group">
                              <label for="" class="text-uppercase"><strong>{{__('Subtitle')}}</strong></label>
                              <input class="form-control" type="text" name="p_subtitle" value="{{ App\Models\Pagesetting::findOrFail(1)->p_subtitle }}" placeholder="Enter Subtitle" required>
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="form-group">
                              <label for="" class="text-uppercase"><strong>{{__('Title')}}</strong></label>
                              <input class="form-control" type="text" name="p_title" value="{{ App\Models\Pagesetting::findOrFail(1)->p_title }}" placeholder="Enter Title" required>
                            </div>
                          </div>
                    </div>

                        <div class="row">

                          <div class="col-lg-12">
                            <div class="form-group">
                              <label for="" class="text-uppercase"><strong>{{__('Text')}}</strong></label>
                              <textarea class="form-control" name="p_text" value="" placeholder="Enter Text" required>{{ App\Models\Pagesetting::findOrFail(1)->p_text }}</textarea>
                            </div>
                          </div>

                    </div>


                        <div class="row">

                          <div class="col-lg-12">
                            <div class="form-group">
                              <label for="" class="text-uppercase"><strong>{{__('Background Image')}} *</strong></label>
                            <div class="img-upload full-width-img">
                                <div id="image-preview" class="img-preview" style="background: url({{ App\Models\Pagesetting::findOrFail(1)->p_background ? asset('assets/images/'.App\Models\Pagesetting::findOrFail(1)->p_background):asset('assets/images/noimage.png') }});">
                                    <label for="image-upload" class="img-label" id="image-label"><i class="icofont-upload-alt"></i>{{__('Upload Image')}}</label>
                                    <input type="file" name="p_background" class="img-upload" id="image-upload">
                                  </div>
                                  <p class="text">{{__('Prefered Size')}}: {{__('(850x445) or Square Sized Image')}}</p>
                            </div>
                            </div>
                          </div>

                    </div>



                        <div class="row">

                          <div class="col-lg-2 offset-lg-5 mt-2">
                            <div class="form-group">
                              <button type="submit" class="btn btn-block text-white text-uppercase infos">{{__('Submit')}}</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>



              <div class="row">
                <div class="col-lg-12">
                  <div class="mr-table allproduct">

                        @include('includes.admin.form-success')  

                    <div class="table-responsiv">
                        <table id="geniustable" class="table table-hover dt-responsive" cellspacing="0" width="100%">
                          <thead>
                            <tr>
                                          <th>Featured Image</th>
                                          <th>Title</th>
                                          <th>Actions</th>
                            </tr>
                          </thead>
                        </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{{-- ADD / EDIT MODAL --}}

                    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
                    
                    
                    <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="submit-loader">
                            <img  src="{{asset('assets/images/'.$gs->admin_loader)}}" alt="">
                        </div>
                      <div class="modal-header">
                      <h5 class="modal-title"></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                      <div class="modal-body">

                      </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                    </div>
</div>

{{-- ADD / EDIT MODAL ENDS --}}


{{-- DELETE MODAL --}}

<div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">

  <div class="modal-header d-block text-center">
    <h4 class="modal-title d-inline-block">Confirm Delete</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
  </div>

      <!-- Modal body -->
      <div class="modal-body">
            <p class="text-center">You are about to delete this Presentation.</p>
            <p class="text-center">Do you want to proceed?</p>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <a class="btn btn-danger btn-ok">Delete</a>
      </div>

    </div>
  </div>
</div>

{{-- DELETE MODAL ENDS --}}

@endsection    

@section('scripts')


{{-- DATA TABLE --}}

    <script type="text/javascript">

    var table = $('#geniustable').DataTable({
         ordering: false,
               processing: true,
               serverSide: true,
               ajax: '{{ route('admin-vpresentation-datatables') }}',
               columns: [
                        { data: 'photo', name: 'photo' , searchable: false, orderable: false},
                        { data: 'title', name: 'title' },
                  { data: 'action', searchable: false, orderable: false }

                     ],
                language : {
                  processing: '<img src="{{asset('assets/images/'.$gs->admin_loader)}}">'
                }
            });

        $(function() {
        $(".btn-area").append('<div class="col-sm-4 table-contents">'+
          '<a class="add-btn" data-href="{{route('admin-vpresentation-create')}}" id="add-data" data-toggle="modal" data-target="#modal1">'+
          '<i class="fas fa-plus"></i> Add New Presentation'+
          '</a>'+
          '</div>');
      });                     
                  
{{-- DATA TABLE ENDS--}}

</script>

@endsection   