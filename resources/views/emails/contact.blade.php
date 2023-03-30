@component('mail::message')
<h1>Correo Grupo Atos</h1>
<h2>Mensaje de {{$name}}</h2>

<p>
    {{$body}}
</p>

<br>
<p>
    Contactar al Cliente por Número Teléfono {{$phone}} o por Correo Electrónico {{$email}}.
</p>

<p>
    ¡Los grandes trabajos son hechos por la perseverancia!
</p>
@endcomponent
