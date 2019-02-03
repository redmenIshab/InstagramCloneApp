package com.instagramcloneapp;

import android.content.Intent;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */

    CallbackManager mCallbackManager;

    // @Override
    // protected List<ReactPackage> getPackages() {
    // mCallbackManager = new CallbackManager.Factory().create();
    // ReactPackage packages[] = new ReactPackage[] { new MainReactPackage(), new
    // FBSDKPackage(mCallbackManager) };
    // return Arrays.<ReactPackage>asList(packages);
    // }

    // @Override
    // public void onActivityResult(int requestCode, int resultCode, Intent data) {
    // super.onActivityResult(requestCode, resultCode, data);
    // mCallbackManager.onActivityResult(requestCode, resultCode, data);

    // }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected String getMainComponentName() {
        return "instagramCloneApp";
    }
}
