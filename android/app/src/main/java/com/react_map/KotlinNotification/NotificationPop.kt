package com.react_map

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.graphics.Color
import android.os.Build
import androidx.core.app.NotificationCompat
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class NotificationPop : ReactContextBaseJavaModule {
    var loadind: Boolean = false
    lateinit var notificationManager: NotificationManager
    lateinit var notificationChannel: NotificationChannel
    lateinit var builder: Notification.Builder
    val channelId: String = "channel-id"
    lateinit var myContext: ReactApplicationContext

    constructor(context: ReactApplicationContext) : super(context) {
        this.loadind = true
        this.myContext = context

    }

    override fun getName(): String {
        return "NotificationPop"
    }

    @ReactMethod
    fun trigger(header: String, description: String) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val notificationChannel =
                    NotificationChannel(
                            channelId,
                            "My notifications",
                            NotificationManager.IMPORTANCE_HIGH
                    )
            notificationChannel.enableLights(true)
            notificationChannel.setDescription("Channel escription")
            notificationChannel.setLightColor(Color.RED)
       notificationChannel.enableVibration(true)


            notificationManager = myContext.getSystemService(NotificationManager::class.java)
            notificationManager.createNotificationChannel(notificationChannel)

            if (this.loadind) {
                val notificationBuilder: NotificationCompat.Builder =
                        NotificationCompat.Builder(myContext, channelId)

                notificationBuilder
                        .setAutoCancel(true)
                        .setWhen(System.currentTimeMillis())
                        .setSmallIcon(R.drawable.common_google_signin_btn_icon_light)
                        .setTicker("hearty 356")
                        .setContentTitle(header)
                        .setContentText(description)
                        .setContentInfo("info")
                notificationManager.notify(1234, notificationBuilder.build())
            }
        } else {
            TODO("VERSION.SDK_INT < O")
        }
    }
}
