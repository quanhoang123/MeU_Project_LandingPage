<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class PageController extends Controller
{
    public function getIndex(){
        return view('Admin.Page.chart');
    }
    public function getAdmin(){
        return view('Admin.Page.login');
    }
    public function LoginAdmin(Request $request){
        $email = $request->email;
    	$password = md5($request->password);
    	$result = DB::table('admin')->where('username',$email)->where('password',$password)->first();
        $select_avatar=DB::table('admin')->get();
    	if($result){
    		Session::put('id-admin',$result->id_admin);
            Session::put('name-admin',$result->name);
    		return Redirect::to('/index')->with('select_avatar',$select_avatar);
    	}else{
    		return Redirect::to('/login');
    	}
        Session::save();
    }
    public function addAdmin(Request $request){
        $data = array();
    	$data['name'] = $request->name;
    	$data['username'] = $request->email;
    	$data['password'] = md5($request->password);
        if($request->hasFile('image')){
            $file=$request->file('image');
            $file_name=$file->getClientOriginalName('image');
            $file->move('image-admin',$file_name);
        }
        if($request->file('image')!=null){
            $data['avatar']=$file_name;       
        }
    	$admin_id = DB::table('admin')->insertGetId($data);
    	return Redirect::to('/login');
    }
        public function Logout_admin(){
            Session::forget('name-admin');
            Session::forget('id-admin');
            return Redirect::to('/login');
        }
    
    // Start Contact

        public function getContact(){
            $contact=ContactModel::all();
            return view('Admin.Contact.contact',compact('contact'));
        }

    // End Contact
    

    public function getFile(){
        $allFile=Storage::allFiles('files');
       
        $files=[];
        foreach ($allFile as $key) {
            array_push($files,Storage::url($key));
            // dd(Storage::url($key));
        }
        return view('Admin.Demo.demo',['files'=>$files]);
    }
    public function postFile(Request $request){
        // dd($request->image);
        foreach ($request->image as $key) {
            $file_name=$key->getClientOriginalName();
            Storage::putFileAs('files',$key,$file_name,'public');
        }
    }
}
