package com.cinebook.services;

import com.cinebook.enums.NotificationChannel;
import com.cinebook.models.Notification;
import com.cinebook.models.NotificationTemplate;

import java.util.HashMap;

public interface NotificationHandler {
    public NotificationChannel getChannel();
    public Notification sendNotification(Notification notification,
                                         HashMap<String, String> context, NotificationTemplate notificationTemplate);
}
