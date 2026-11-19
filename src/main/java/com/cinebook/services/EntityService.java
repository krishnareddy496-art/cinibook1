package com.cinebook.services;

import com.cinebook.models.GlobalRecord;

public interface EntityService<T>{
    public T saveOrUpdate(T record);
}
