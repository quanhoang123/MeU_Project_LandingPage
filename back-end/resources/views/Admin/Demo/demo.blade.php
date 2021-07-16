@extends('Admin.index')
@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <h2 class="card-header w-100 m-1 text-center">Upload Image</h2>
    </div>
    <div class="row justify-content-center">
        <form class="m-2" action={{URL::to('/uploadfile')}} method="post" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="form-group">
                <label for="image">Choose Image</label>
                <input id="image" type="file" name="image[]">
            </div>
            <button type="submit" class="btn btn-dark d-block w-75 mx-auto">Upload</button>
        </form>
        @foreach ($files as $item)
            <a href="{{$item}}" target="_blank">{{$item}} </a>
        @endforeach
    </div>
</div>
@endsection